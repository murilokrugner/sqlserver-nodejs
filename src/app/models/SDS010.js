/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SDS010', {
    DS_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DS_DOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    DS_SERIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DS_FORNEC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DS_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DS_CNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    DS_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DS_ESPECI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DS_EMISSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DS_FORMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DS_EST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DS_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DS_ARQUIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                '
    },
    DS_USERIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    DS_DATAIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DS_HORAIMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DS_USERPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                         '
    },
    DS_DATAPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DS_HORAPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DS_CHAVENF: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DS_VERSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '     '
    },
    DS_CFESP: {
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
    DS_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_TRANSP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DS_PLACA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    DS_PLIQUI: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_PBRUTO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_ESPECI1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DS_ESPECI2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DS_ESPECI3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DS_ESPECI4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    DS_VOLUME1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_VOLUME2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_VOLUME3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_VOLUME4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_TPFRETE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DS_VALMERC: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_DOCLOG: {
      type: "IMAGE",
      allowNull: true
    },
    DS_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    DS_BASEICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_VALICM: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    DS_TPCTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    DS_CHVNFOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                            '
    },
    DS_CODNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    DS_HORNFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    DS_NUMRPS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '            '
    },
    DS_SDOC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    DS_MODAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    }
  }, {
    tableName: 'SDS010'
  });
};
