/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SQ3010', {
    Q3_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q3_CARGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    Q3_DESCSUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    Q3_CC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    Q3_DESCDET: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q3_DRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q3_DRELINT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q3_DHABILI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    Q3_GRUPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q3_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    Q3_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q3_PONTOSI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Q3_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    Q3_TABNIVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q3_CLASSE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
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
    },
    Q3_TABFAIX: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q3_CATEG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Q3_ADTPCAR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Q3_ADTPJU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Q3_ADTPESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    Q3_ADATIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Q3_ADTPROV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Q3_ADHORAS: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    Q3_ADCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    Q3_ADRESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    }
  }, {
    tableName: 'SQ3010'
  });
};
