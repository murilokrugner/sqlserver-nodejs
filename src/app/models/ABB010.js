/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('ABB010', {
    ABB_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    ABB_CODTEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    ABB_NUMOS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABB_DTINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABB_HRINI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ABB_DTFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABB_HRFIM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    ABB_HRTOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ABB_OBSERV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    ABB_SACRA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABB_CHEGOU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABB_DATA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABB_ATENDE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
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
    ABB_ENTIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ABB_CHAVE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    ABB_IDCFAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    ABB_CODIGO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    ABB_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABB_MANUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABB_LOCAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    ABB_TIPOMV: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    ABB_CUSTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    ABB_CODTWZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    ABB_SAIU: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    ABB_OBSIN: {
      type: "VARBINARY",
      allowNull: true
    },
    ABB_OBSOUT: {
      type: "VARBINARY",
      allowNull: true
    },
    ABB_LATIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    ABB_LONIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    ABB_LATOUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    ABB_LONOUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    ABB_HRCHIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    ABB_HRCOUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    }
  }, {
    tableName: 'ABB010'
  });
};
