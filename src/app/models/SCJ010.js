/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('SCJ010', {
    CJ_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CJ_NUM: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CJ_EMISSAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CJ_PROSPE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CJ_LOJPRO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CJ_CLIENTE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CJ_LOJA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CJ_CLIENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CJ_LOJAENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CJ_CONDPAG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CJ_DESC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_TABELA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    CJ_DESC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_PARC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_DESC1: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_DESC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_DATA1: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CJ_PARC2: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_DATA2: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CJ_PARC3: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_DATA3: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CJ_PARC4: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_DATA4: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CJ_STATUS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CJ_COTCLI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CJ_FRETE: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_SEGURO: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_DESPESA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_FRETAUT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_VALIDA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CJ_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CJ_MOEDA: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_TIPLIB: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CJ_TPCARGA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    CJ_DESCONT: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_PDESCAB: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    CJ_PROPOST: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CJ_NROPOR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CJ_REVISA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    CJ_TXMOEDA: {
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
    CJ_X_DESC: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_D_OBS: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_NAT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    CJ_X_LMIN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CJ_X_LENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CJ_X_CENT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '        '
    },
    CJ_X_I_ENT: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_ENGP: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_GRP: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_VPP: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_CNEM: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_IMG: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CJ_X_MOT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    CJ_X_OBSM: {
      type: "IMAGE",
      allowNull: true
    },
    CJ_X_AC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                    '
    },
    CJ_X_EMCON: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    CJ_X_TIDES: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                                                                                        '
    },
    CJ_X_CNOME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                    '
    },
    CJ_X_CCNPJ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '              '
    },
    CJ_X_CIE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                  '
    },
    CJ_X_CTEL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    CJ_X_CEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    },
    CJ_X_CRAZ: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                        '
    }
  }, {
    tableName: 'SCJ010'
  });
};
