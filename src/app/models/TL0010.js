/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TL0010', {
    TL0_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL0_EPIGEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TL0_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL0_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL0_EPIFIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TL0_NUMCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TL0_DTVENC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TL0_DTINIC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TL0_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TL0_DTVALI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    D_E_L_E_T_: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    R_E_C_N_O_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))',
      primaryKey: true
    },
    R_E_C_D_E_L_: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: '((0))'
    }
  }, {
    tableName: 'TL0010'
  });
};
