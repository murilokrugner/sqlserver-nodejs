/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ACO010', {
    ACO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACO_CODREG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACO_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ACO_CODCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACO_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ACO_CODTAB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ACO_CONDPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ACO_FORMPG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACO_FAIXA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACO_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACO_PERDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ACO_CFAIXA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ACO_TPHORA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ACO_HORADE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACO_HORATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ACO_DATDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACO_DATATE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ACO_GRPVEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ACO_DESCPR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'F'
    },
    ACO_VLRDES: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
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
    ACO_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    }
  }, {
    tableName: 'ACO010'
  });
};
