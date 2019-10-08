/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TLW010', {
    TLW_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLW_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLW_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLW_CODEPI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    TLW_NUMCAP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    TLW_MAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    TLW_DTENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLW_HRENTR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TLW_DTDEVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    TLW_HRDEVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    TLW_QTDEVO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    TLW_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    TLW_TIPODV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    TLW_NUMSEQ: {
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
    tableName: 'TLW010'
  });
};
