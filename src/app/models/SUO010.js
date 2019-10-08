/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SUO010', {
    UO_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    UO_CODCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UO_DESC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    UO_OBJETIV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                                                                                                                                                              '
    },
    UO_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UO_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UO_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UO_ATENDIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UO_PUBALVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UO_RESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    UO_COORDEN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    UO_DEPTO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    UO_META: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_METAOP: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_PREVEND: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_RETORNO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_PRELEAD: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_TOTSUC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_TOTFRA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_VENCIDO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_RECUPER: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_MSBLQL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    UO_DTINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UO_HRINS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    UO_TPCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    UO_DTPCAMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    UO_DTINIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UO_DTTERMR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    UO_ORCALOC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_OPORTU: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_SUSPEC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_PROSPE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_DESQUA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    UO_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
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
    tableName: 'SUO010'
  });
};
