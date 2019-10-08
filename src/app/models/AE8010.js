/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AE8010', {
    AE8_FILIAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '  '
    },
    AE8_RECURS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AE8_DESCRI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                              '
    },
    AE8_TIPO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_ACUMUL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_UMAX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE8_SUPALO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_PRODUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AE8_CALEND: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE8_TPREAL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_VALOR: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE8_EMAIL: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '                                                  '
    },
    AE8_CUSFIX: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE8_TMPAD: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '   '
    },
    AE8_CODFUN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AE8_PRDREA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '               '
    },
    AE8_OK: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '    '
    },
    AE8_USER: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AE8_ESTRUT: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_DOCUME: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_GERSC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_GERSA: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_GEROP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_GERCP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_GEREMP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_CONFIR: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_NFE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_REQUIS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_DESP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_RECEI: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_NFS: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_MOVBAN: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_APTMRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_ATIVO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_EQUIP: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '          '
    },
    AE8_CUSMEN: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: '((0))'
    },
    AE8_PREREC: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_APRPRE: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: ' '
    },
    AE8_CODRD0: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '      '
    },
    AE8_FUNCAO: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: '         '
    },
    AE8_RASTRO: {
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
    }
  }, {
    tableName: 'AE8010'
  });
};
