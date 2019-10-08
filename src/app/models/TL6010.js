/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TL6010', {
    TL6_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TL6_VACINA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    TL6_NOMVAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    TL6_DESVAC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                            '
    },
    TL6_SEXO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL6_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL6_FUNC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL6_FNCR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TL6_USERGI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                 '
    },
    TL6_MMVNG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL6_MMEFTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TL6_MMRCMC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
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
    tableName: 'TL6010'
  });
};
